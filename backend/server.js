import express from "express";
import sql from "mssql";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// ✅ Route: Get items (with optional search + ActiveQryGroup filter)
app.get("/items", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const request = pool.request();

    // 🧠 Get query parameters from URL (example: /items?q=bulb&group=2)
    const searchQuery = req.query.q || "";
    const activeGroup = req.query.group || ""; // can be passed in URL

    // ✅ Use parameterized queries to prevent SQL injection
    request.input("search", sql.VarChar, `%${searchQuery}%`);
    if (activeGroup) request.input("group", sql.VarChar, activeGroup);

    const query = `
      SELECT 
        ItemCode,
        ItemName,
        ItmsGrpCod,
        U_ITEM_CLASSIFICATION,
        U_INTERACTIVE,
        Price,
        PriceList,
        ActiveQryGroup
      FROM OITM_WPRICE_WithQryGroup
      WHERE
        U_ITEM_CLASSIFICATION != 1 
        AND U_INTERACTIVE IN (1, 2, '') 
        AND PriceList = 2
        ${
          activeGroup
            ? `AND ActiveQryGroup = @group`
            : ""
        }
        ${
          searchQuery
            ? `AND (
                ItemName LIKE @search
                OR ItemCode LIKE @search
              )`
            : ""
        }
    `;

    const result = await request.query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({
      message: "Database connection error",
      error: err.message,
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
