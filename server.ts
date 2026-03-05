import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for diagnosis
  app.post("/api/diagnosis", async (req, res) => {
    const data = req.body;
    const { 
      name, contact, 
      lifeStage, residence, wealthSource, 
      disposableIncome, assets, currencyRatio, debtStatus,
      protectionStatus, urgentGoals, familyConcerns,
      experience, decisionStyle, riskReaction, timeHorizon, budgetRatio
    } = data;

    console.log("Received diagnosis data:", data);

    // Email configuration
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "mock_user",
        pass: process.env.SMTP_PASS || "mock_pass",
      },
      tls: {
        // Do not fail on invalid certs (common for some enterprise SMTP)
        rejectUnauthorized: false
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });

    const mailOptions = {
      from: `"Francis Chi Website" <${process.env.SMTP_USER || 'francischi@francis-family-cfo.com'}>`,
      to: "chiwangqing@gmail.com",
      subject: `[新客戶診斷線索] 360°財富DNA掃描 - ${name}`,
      text: `
新客戶完整診斷報告 (Q1-Q15):
--------------------------------------------------
基本信息:
- 稱呼: ${name}
- 聯繫方式: ${contact}

模块一：基础画像与财富基因
- Q1 人生阶段: ${lifeStage}
- Q2 居住及收入来源: ${residence}
- Q3 财富原始来源: ${wealthSource}

模块二：资产负债与现金流
- Q4 可支配结余占比: ${disposableIncome}
- Q5 家庭资产分配 (S&P):
    * 现金流账户: ${assets.cash}%
    * 杠杆保障账户: ${assets.protection}%
    * 高收益投资账户: ${assets.investment}%
    * 保本升值账户: ${assets.savings}%
- Q6 跨境资产占比: ${currencyRatio}
- Q7 负债状况: ${debtStatus}

模块三：保障缺口与核心目标
- Q8 家庭基础保障状况: ${protectionStatus}
- Q9 最迫切理财目标: ${urgentGoals.join(', ')}
- Q10 最担心的财务压力: ${familyConcerns}

模块四：投资DNA与风险偏好
- Q11 投资经验年限: ${experience}
- Q12 投资决策风格: ${decisionStyle}
- Q13 风险下跌反应: ${riskReaction}
- Q14 资金不使用期限: ${timeHorizon}
- Q15 拟规划收入比例: ${budgetRatio}
--------------------------------------------------
      `,
    };

    try {
      // Check if configured
      if (!process.env.SMTP_USER || process.env.SMTP_USER === "mock_user") {
        console.warn("CRITICAL: SMTP_USER is not configured in Environment Variables.");
        return res.json({ status: "ok", warning: "SMTP not configured" });
      }

      console.log(`Attempting to send email via ${process.env.SMTP_HOST}:${smtpPort} (Secure: ${smtpPort === 465})`);
      await transporter.sendMail(mailOptions);
      console.log("SUCCESS: Email sent to chiwangqing@gmail.com");
      res.json({ status: "ok" });
    } catch (error: any) {
      console.error("FATAL: SMTP Error Details:");
      console.error("Message:", error.message);
      console.error("Code:", error.code);
      console.error("Command:", error.command);
      console.error("Response:", error.response);
      console.error("Stack:", error.stack);
      
      res.json({ 
        status: "error", 
        message: "SMTP connection failed",
        error: error.message 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
