import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  BarChart3, 
  Dna, 
  UserCheck, 
  ArrowRight,
  ShieldAlert,
  TrendingUp,
  X
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface DiagnosisData {
  // Module 1
  lifeStage: string;
  residence: string;
  wealthSource: string;
  // Module 2
  disposableIncome: string;
  assets: {
    cash: number;
    protection: number;
    investment: number;
    savings: number;
  };
  currencyRatio: string;
  debtStatus: string;
  // Module 3
  protectionStatus: string;
  urgentGoals: string[];
  familyConcerns: string;
  // Module 4
  experience: string;
  decisionStyle: string;
  riskReaction: string;
  timeHorizon: string;
  budgetRatio: string;
  // Lead
  name: string;
  contact: string;
}

const WealthDiagnosis: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { lang } = useLanguage();
  const [step, setStep] = useState(0); // 0: Landing, 1-15: Questions, 16: Lead, 17: Result
  const [data, setData] = useState<DiagnosisData>({
    lifeStage: '',
    residence: '',
    wealthSource: '',
    disposableIncome: '',
    assets: { cash: 25, protection: 25, investment: 25, savings: 25 },
    currencyRatio: '',
    debtStatus: '',
    protectionStatus: '',
    urgentGoals: [],
    familyConcerns: '',
    experience: '',
    decisionStyle: '',
    riskReaction: '',
    timeHorizon: '',
    budgetRatio: '',
    name: '',
    contact: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleAssetChange = (key: keyof DiagnosisData['assets'], value: number) => {
    setData(prev => ({
      ...prev,
      assets: { ...prev.assets, [key]: value }
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return data.lifeStage !== '';
      case 2: return data.residence !== '';
      case 3: return data.wealthSource !== '';
      case 4: return data.disposableIncome !== '';
      case 5: return Object.values(data.assets).reduce((a: number, b: number) => a + b, 0) === 100;
      case 6: return data.currencyRatio !== '';
      case 7: return data.debtStatus !== '';
      case 8: return data.protectionStatus !== '';
      case 9: return data.urgentGoals.length > 0 && data.urgentGoals.length <= 2;
      case 10: return data.familyConcerns !== '';
      case 11: return data.experience !== '';
      case 12: return data.decisionStyle !== '';
      case 13: return data.riskReaction !== '';
      case 14: return data.timeHorizon !== '';
      case 15: return data.budgetRatio !== '';
      case 16: return data.name !== '' && data.contact !== '';
      default: return true;
    }
  };

  const handleSubmit = async () => {
    nextStep();
    // Send email logic
    try {
      await fetch('/api/diagnosis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Failed to send diagnosis data:', error);
    }
  };

  const getAssessment = () => {
    const results = [];
    
    // KYC/CRS Logic
    if (data.residence.includes('Cross-border') || data.residence.includes('跨國')) {
      results.push({
        type: 'info',
        text: lang === 'EN'
          ? "We identified your cross-border tax background. We will specifically introduce asset isolation and tax optimization considerations under the CRS framework for you."
          : "識別到您擁有跨國稅務背景，我們將特別為您引入 CRS 框架下的資產隔離與稅務優化考量。"
      });
    }

    // Protection Logic
    if (data.assets.protection < 10 || data.protectionStatus.includes('Bare') || data.protectionStatus.includes('裸奔')) {
      results.push({
        type: 'warning',
        text: lang === 'EN' 
          ? "Your underlying safety net is thin. It is recommended to prioritize using leverage tools to establish a family risk firewall."
          : "您的底層安全墊略顯薄弱，建議優先利用槓桿工具建立家庭風險防火牆。"
      });
    }

    // Risk Mismatch Logic
    if (data.riskReaction === 'A' && data.assets.investment > 40) {
      results.push({
        type: 'alert',
        text: lang === 'EN'
          ? "Your risk preference is relatively conservative, but your high-volatility asset ratio is currently high. There is a [Risk Mismatch] hidden danger. It is recommended that Francis re-examine your asset safety net for you."
          : "您的風險偏好相對穩健，但目前高波動資產佔比偏高，存在【風險錯配】隱患。建議由池老C為您重新檢視資產安全墊。"
      });
    }

    // Liquidity Warning
    if (data.timeHorizon === '<1y') {
      results.push({
        type: 'warning',
        text: lang === 'EN'
          ? "Your funds have strong short-term liquidity needs. Francis will avoid any medium-to-long-term products with lock-up periods for you to prevent [Maturity Mismatch]."
          : "您的資金存在強烈的短期流動性需求，池老C將為您規避任何帶鎖定期的中長期產品，防止【期限錯配】。"
      });
    }

    return results;
  };

  return (
    <div className="fixed inset-0 z-[100] bg-midnight flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-midnight/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-midnight" />
          </div>
          <span className="font-serif text-gold font-bold tracking-wider">360° WEALTH MRI</span>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <X className="w-6 h-6 text-soft-white/60" />
        </button>
      </div>

      {/* Progress Bar */}
      {step > 0 && step < 17 && (
        <div className="w-full h-1 bg-white/5">
          <motion.div 
            className="h-full gold-gradient"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 16) * 100}%` }}
          />
          <div className="px-6 py-1 flex justify-end">
            <span className="text-[10px] text-gold font-mono uppercase tracking-widest">
              {step <= 15 ? `${step} / 15` : step === 16 ? 'Final Step' : 'Result'}
            </span>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-soft-white">
                {lang === 'EN' ? "Francis's Wealth Health Scan" : "池老C的財富健康掃描"}
                <br />
                <span className="text-gold">— {lang === 'EN' ? "360° Comprehensive Diagnosis" : "360° 深度財富診斷"}</span>
              </h2>
              <p className="text-soft-white/60 text-lg mb-12 leading-relaxed">
                {lang === 'EN' 
                  ? "This is a deep conversation about your family's wealth health. Complete 15 questions in 3 minutes to get your professional assessment."
                  : "這是一次關於您家族財富健康的深度對話。只需3分鐘完成15個專業問題，獲取您的專屬評估報告。"}
              </p>
              <button 
                onClick={nextStep}
                className="gold-gradient text-midnight font-bold px-10 py-4 rounded-full shadow-xl shadow-gold/20 flex items-center gap-2 mx-auto hover:scale-105 transition-transform"
              >
                {lang === 'EN' ? "Start Diagnosis" : "開始專屬診断"}
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* Module 1: Foundation (Steps 1-3) */}
          {step === 1 && (
            <QuestionStep
              key="q1"
              title="Q1: Life Stage"
              question={lang === 'EN' ? "What stage of life are you currently in?" : "目前您處於哪個人生階段？"}
              options={[
                { v: 'Single', l: lang === 'EN' ? 'Single' : '單身貴族' },
                { v: 'Married', l: lang === 'EN' ? 'Married' : '已婚組建家庭' },
                { v: 'Parents', l: lang === 'EN' ? 'Parents' : '為人父母' },
                { v: 'RetirementCountdown', l: lang === 'EN' ? 'Retirement Countdown' : '退休倒計時' },
                { v: 'Retired', l: lang === 'EN' ? 'Retired' : '已享受退休' },
              ]}
              value={data.lifeStage}
              onChange={(v) => setData(d => ({ ...d, lifeStage: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 2 && (
            <QuestionStep
              key="q2"
              title="Q2: Residence & Tax"
              question={lang === 'EN' ? "Where is your main residence and core income source?" : "您過去一年的主要居住地及核心收入來源地是？"}
              options={[
                { v: 'SingleCountry', l: lang === 'EN' ? 'Single Country' : '集中在單一國家' },
                { v: 'Cross-border', l: lang === 'EN' ? 'Cross-border / Multiple Jurisdictions' : '跨國或涉及多個稅務管轄區' },
              ]}
              value={data.residence}
              onChange={(v) => setData(d => ({ ...d, residence: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 3 && (
            <QuestionStep
              key="q3"
              title="Q3: Wealth Source"
              question={lang === 'EN' ? "What was the initial source of your core wealth?" : "您的核心財富積累，最初主要是來源於？"}
              options={[
                { v: 'Business', l: lang === 'EN' ? 'Business Dividends/Exit' : '創辦企業分紅或套現' },
                { v: 'Salary', l: lang === 'EN' ? 'High Salary' : '高薪收入積累' },
                { v: 'Inheritance', l: lang === 'EN' ? 'Inheritance' : '家族財富傳承' },
                { v: 'Investment', l: lang === 'EN' ? 'Investment Returns' : '投資理財回報' },
              ]}
              value={data.wealthSource}
              onChange={(v) => setData(d => ({ ...d, wealthSource: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {/* Module 2: Diagnosis (Steps 4-7) */}
          {step === 4 && (
            <QuestionStep
              key="q4"
              title="Q4: Disposable Income"
              question={lang === 'EN' ? "What percentage of your total income is disposable surplus?" : "扣除剛性支出後，您每月的「可支配結餘」大概佔總收入的？"}
              options={[
                { v: '<10%', l: '< 10%' },
                { v: '10-30%', l: '10% - 30%' },
                { v: '30-50%', l: '30% - 50%' },
                { v: '>50%', l: '> 50%' },
              ]}
              value={data.disposableIncome}
              onChange={(v) => setData(d => ({ ...d, disposableIncome: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 5 && (
            <motion.div 
              key="q5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  <BarChart3 className="w-6 h-6" />
                  <h3 className="text-xl font-serif font-bold uppercase tracking-widest">Q5: Asset Panorama</h3>
                </div>
                <p className="text-soft-white/80">
                  {lang === 'EN' 
                    ? "Based on the S&P Asset Quadrant, how is your current family wealth distributed?"
                    : "參考標準普爾資產象限圖，您目前的家庭資產大約是如何分配的？"}
                </p>
                
                <div className="space-y-6 glass p-8 rounded-3xl border-white/5">
                  {[
                    { key: 'cash', label: lang === 'EN' ? 'Cash Flow (Daily)' : '現金流帳戶（日常開銷）' },
                    { key: 'protection', label: lang === 'EN' ? 'Leverage Protection' : '槓桿保障帳戶（保命的錢）' },
                    { key: 'investment', label: lang === 'EN' ? 'High Yield' : '高收益投資帳戶（生錢的錢）' },
                    { key: 'savings', label: lang === 'EN' ? 'Capital Preservation' : '保本升值帳戶（養老的錢）' },
                  ].map((item) => (
                    <div key={item.key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-soft-white/60">{item.label}</span>
                        <span className="text-gold font-mono">{data.assets[item.key as keyof DiagnosisData['assets']]}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={data.assets[item.key as keyof DiagnosisData['assets']]}
                        onChange={(e) => handleAssetChange(item.key as keyof DiagnosisData['assets'], parseInt(e.target.value))}
                        className="w-full accent-gold h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="text-xs text-soft-white/40 uppercase tracking-widest">Total Allocation</span>
                    <span className={`text-lg font-bold ${Object.values(data.assets).reduce((a: number, b: number) => a + b, 0) === 100 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {Object.values(data.assets).reduce((a: number, b: number) => a + b, 0)}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={prevStep} className="flex items-center gap-2 text-soft-white/40 hover:text-soft-white transition-colors">
                  <ChevronLeft className="w-5 h-5" /> {lang === 'EN' ? "Back" : "返回"}
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="gold-gradient text-midnight font-bold px-8 py-3 rounded-full disabled:opacity-30 flex items-center gap-2"
                >
                  {lang === 'EN' ? "Next" : "下一步"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 6 && (
            <QuestionStep
              key="q6"
              title="Q6: Currency Risk"
              question={lang === 'EN' ? "What is the proportion of non-local currency (USD, HKD, etc.) in your assets?" : "您的總資產中，非本國貨幣（如美元、港幣等跨境資產）的占比大約是？"}
              options={[
                { v: '0-10%', l: '0-10%' },
                { v: '10-30%', l: '10-30%' },
                { v: '30-50%', l: '30-50%' },
                { v: '50%+', l: '50%+' },
              ]}
              value={data.currencyRatio}
              onChange={(v) => setData(d => ({ ...d, currencyRatio: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 7 && (
            <QuestionStep
              key="q7"
              title="Q7: Debt Status"
              question={lang === 'EN' ? "What is your current debt-to-asset ratio?" : "您目前的負債狀況（如房貸、企業個人擔保等）大約佔總資產的多少？"}
              options={[
                { v: 'None', l: lang === 'EN' ? 'No Debt' : '無負債' },
                { v: '<30%', l: lang === 'EN' ? '<30% Healthy' : '<30% 健康負債' },
                { v: '30-50%', l: lang === 'EN' ? '30%-50% Pressure' : '30%-50% 略有壓力' },
                { v: '>50%', l: lang === 'EN' ? '>50% Heavy' : '>50% 壓力較大' },
              ]}
              value={data.debtStatus}
              onChange={(v) => setData(d => ({ ...d, debtStatus: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {/* Module 3: Deep Dive (Steps 8-10) */}
          {step === 8 && (
            <QuestionStep
              key="q8"
              title="Q8: Protection Gap"
              question={lang === 'EN' ? "What is your current family basic protection status?" : "您目前的家庭基礎保障（如重疾、高端醫療、人壽）狀況如何？"}
              options={[
                { v: 'Bare', l: lang === 'EN' ? 'Bare / None' : '近乎「裸奔」' },
                { v: 'Basic', l: lang === 'EN' ? 'Basic Social/Commercial' : '有基礎社保或少量商保' },
                { v: 'Old', l: lang === 'EN' ? 'Sufficient but Outdated' : '額度充足但很久未梳理' },
                { v: 'Global', l: lang === 'EN' ? 'Comprehensive Global' : '擁有非常完善的全球保障' },
              ]}
              value={data.protectionStatus}
              onChange={(v) => setData(d => ({ ...d, protectionStatus: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 9 && (
            <motion.div 
              key="q9"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  <Dna className="w-6 h-6" />
                  <h3 className="text-xl font-serif font-bold uppercase tracking-widest">Q9: Core Goals</h3>
                </div>
                <p className="text-soft-white/80">
                  {lang === 'EN' 
                    ? "Which two financial goals are most urgent for you? (Select max 2)"
                    : "在以下理財目標中，您目前【最迫切】希望優先解決的前兩項是？（最多選兩項）"}
                </p>
                <div className="space-y-3">
                  {[
                    { v: 'A', l: lang === 'EN' ? 'A. Safety Net for Emergencies' : 'A. 應對突發變故的財務安全網' },
                    { v: 'B', l: lang === 'EN' ? 'B. Health & Overseas Medical' : 'B. 醫療健康儲備與海外就醫' },
                    { v: 'C', l: lang === 'EN' ? 'C. Children Education Fund' : 'C. 子女教育基金' },
                    { v: 'D', l: lang === 'EN' ? 'D. Retirement Planning' : 'D. 退休養老規劃' },
                    { v: 'E', l: lang === 'EN' ? 'E. Wealth Inheritance & Tax' : 'E. 財富傳承與稅務優化' },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      onClick={() => {
                        const current = data.urgentGoals;
                        if (current.includes(opt.v)) {
                          setData(d => ({ ...d, urgentGoals: current.filter(g => g !== opt.v) }));
                        } else if (current.length < 2) {
                          setData(d => ({ ...d, urgentGoals: [...current, opt.v] }));
                        }
                      }}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex justify-between items-center ${
                        data.urgentGoals.includes(opt.v) 
                          ? 'bg-gold/10 border-gold text-gold' 
                          : 'bg-white/5 border-white/10 text-soft-white/60'
                      }`}
                    >
                      {opt.l}
                      {data.urgentGoals.includes(opt.v) && <CheckCircle2 className="w-5 h-5" />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={prevStep} className="flex items-center gap-2 text-soft-white/40 hover:text-soft-white transition-colors">
                  <ChevronLeft className="w-5 h-5" /> {lang === 'EN' ? "Back" : "返回"}
                </button>
                <button 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="gold-gradient text-midnight font-bold px-8 py-3 rounded-full disabled:opacity-30 flex items-center gap-2"
                >
                  {lang === 'EN' ? "Next" : "下一步"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 10 && (
            <QuestionStep
              key="q10"
              title="Q10: Family Concerns"
              question={lang === 'EN' ? "What financial pressure do you worry about most for your family?" : "假設您需要離開一段時間，您最擔心家人面臨哪方面的財務壓力？"}
              options={[
                { v: 'Income', l: lang === 'EN' ? 'Loss of Income' : '失去主要收入來源' },
                { v: 'Medical', l: lang === 'EN' ? 'Medical Expenses' : '龐大的醫療開支' },
                { v: 'Debt', l: lang === 'EN' ? 'Debt Repayment' : '債務償還壓力' },
                { v: 'Inheritance', l: lang === 'EN' ? 'Inheritance Dispute' : '資產傳承糾紛' },
              ]}
              value={data.familyConcerns}
              onChange={(v) => setData(d => ({ ...d, familyConcerns: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {/* Module 4: Investor DNA (Steps 11-15) */}
          {step === 11 && (
            <QuestionStep
              key="q11"
              title="Q11: Experience"
              question={lang === 'EN' ? "How many years of experience do you have in stocks or funds?" : "您參與股票、基金或衍生品投資的實際經驗大約有多少年？"}
              options={[
                { v: '<2y', l: lang === 'EN' ? '< 2 Years' : '少於2年' },
                { v: '2-5y', l: lang === 'EN' ? '2-5 Years' : '2-5年' },
                { v: '5-10y', l: lang === 'EN' ? '5-10 Years' : '5-10年' },
                { v: '10y+', l: lang === 'EN' ? '10+ Years' : '10年以上' },
              ]}
              value={data.experience}
              onChange={(v) => setData(d => ({ ...d, experience: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 12 && (
            <QuestionStep
              key="q12"
              title="Q12: Decision Style"
              question={lang === 'EN' ? "What is your personal style in investment decision-making?" : "在投資決策上，您的個人風格更傾向於？"}
              options={[
                { v: 'A', l: lang === 'EN' ? 'A. Independent & Risk-taking' : 'A. 完全自主選擇並願承擔風險' },
                { v: 'B', l: lang === 'EN' ? 'B. Rely on Advisor Advice' : 'B. 依賴專業理財顧問的建議' },
                { v: 'C', l: lang === 'EN' ? 'C. Hands-off Management' : 'C. 完全不想自己管理' },
              ]}
              value={data.decisionStyle}
              onChange={(v) => setData(d => ({ ...d, decisionStyle: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 13 && (
            <QuestionStep
              key="q13"
              title="Q13: Risk Reaction"
              question={lang === 'EN' ? "If your 1M investment drops to 800k (-20%), your reaction is?" : "假設您投資了100萬，一年後帳戶顯示只剩80萬（下跌20%），您的第一反應是？"}
              options={[
                { v: 'A', l: lang === 'EN' ? 'Sell immediately' : '立刻止損賣出' },
                { v: 'B', l: lang === 'EN' ? 'Anxious but wait' : '感到焦慮但選擇觀望' },
                { v: 'C', l: lang === 'EN' ? 'Buy more' : '視為加倉機會' },
              ]}
              value={data.riskReaction}
              onChange={(v) => setData(d => ({ ...d, riskReaction: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 14 && (
            <QuestionStep
              key="q14"
              title="Q14: Time Horizon"
              question={lang === 'EN' ? "How long do you expect to NOT use this planned fund?" : "您本次擬規劃的資金，預計多久之內【絕對不會】動用？"}
              options={[
                { v: '<1y', l: lang === 'EN' ? '< 1 Year' : '1年以內' },
                { v: '1-5y', l: lang === 'EN' ? '1-5 Years' : '1-5年' },
                { v: '5-20y', l: lang === 'EN' ? '5-20 Years' : '5-20年' },
                { v: '20y+', l: lang === 'EN' ? '20+ Years' : '20年以上' },
              ]}
              value={data.timeHorizon}
              onChange={(v) => setData(d => ({ ...d, timeHorizon: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 15 && (
            <QuestionStep
              key="q15"
              title="Q15: Planning Budget"
              question={lang === 'EN' ? "In summary, what percentage of your disposable income are you willing to allocate for long-term asset allocation?" : "綜合來看，您大概願意將可支配收入的多少比例，用於中長期的資產配置？"}
              options={[
                { v: '<10%', l: '< 10%' },
                { v: '10-20%', l: '10% - 20%' },
                { v: '20-50%', l: '20% - 50%' },
                { v: 'Depends', l: lang === 'EN' ? 'Depends on Return' : '視方案回報而定' },
              ]}
              value={data.budgetRatio}
              onChange={(v) => setData(d => ({ ...d, budgetRatio: v }))}
              onNext={nextStep}
              onPrev={prevStep}
              isValid={isStepValid()}
              lang={lang}
            />
          )}

          {step === 16 && (
            <motion.div 
              key="step16"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-8"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-soft-white">
                  {lang === 'EN' ? "Diagnosis Complete!" : "財富診斷已完成！"}
                </h3>
                <p className="text-soft-white/60">
                  {lang === 'EN' 
                    ? "To send you the full report and follow up, please leave your contact details."
                    : "為了向您發送完整的評估報告及後續跟進，請留下您的常用聯繫方式。"}
                </p>
              </div>

              <div className="space-y-6 glass p-8 rounded-3xl border-white/5">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold">{lang === 'EN' ? "Your Name" : "您的稱呼"}</label>
                  <input 
                    type="text" 
                    placeholder={lang === 'EN' ? "e.g. Mr. Smith" : "例如：王先生"}
                    value={data.name}
                    onChange={(e) => setData(d => ({ ...d, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-soft-white focus:border-gold focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gold/60 font-bold">WhatsApp / WeChat ID</label>
                  <input 
                    type="text" 
                    placeholder={lang === 'EN' ? "ID or Phone Number" : "微信號或手機號"}
                    value={data.contact}
                    onChange={(e) => setData(d => ({ ...d, contact: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-soft-white focus:border-gold focus:outline-none transition-all"
                  />
                </div>
                <p className="text-[10px] text-soft-white/30 italic">
                  {lang === 'EN' 
                    ? "* Your information is only used for this diagnosis and contact. We strictly comply with international KYC/AML protocols and privacy laws."
                    : "* 您的信息僅用於本次財務診斷及聯絡，我們將嚴格遵守國際KYC與AML保密協議及相關隱私法例。"}
                </p>
              </div>

              <div className="flex justify-between pt-8">
                <button onClick={prevStep} className="flex items-center gap-2 text-soft-white/40 hover:text-soft-white transition-colors">
                  <ChevronLeft className="w-5 h-5" /> {lang === 'EN' ? "Back" : "返回"}
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="gold-gradient text-midnight font-bold px-10 py-4 rounded-full disabled:opacity-30 flex items-center gap-2 shadow-xl shadow-gold/20"
                >
                  {lang === 'EN' ? "View My Report" : "查看我的專業評估報告"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 17 && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full space-y-8"
            >
              <div className="text-center space-y-2">
                <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-[10px] uppercase tracking-widest font-bold mb-4">
                  Analysis Complete
                </div>
                <h3 className="text-3xl font-serif font-bold text-soft-white">
                  {lang === 'EN' ? "Wealth Diagnosis Report" : "專業綜合評估結果"}
                </h3>
              </div>

              <div className="space-y-6">
                {getAssessment().map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className={`p-6 rounded-2xl border flex gap-4 ${
                      item.type === 'warning' ? 'bg-rose-500/5 border-rose-500/20' :
                      item.type === 'alert' ? 'bg-amber-500/5 border-amber-500/20' :
                      'bg-blue-500/5 border-blue-500/20'
                    }`}
                  >
                    <div className="shrink-0">
                      {item.type === 'warning' ? <ShieldAlert className="w-6 h-6 text-rose-400" /> :
                       item.type === 'alert' ? <TrendingUp className="w-6 h-6 text-amber-400" /> :
                       <CheckCircle2 className="w-6 h-6 text-blue-400" />}
                    </div>
                    <p className="text-soft-white/80 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass p-8 rounded-3xl border-gold/20 space-y-4"
                >
                  <h4 className="text-gold font-bold uppercase tracking-widest text-sm">Next Steps Advice</h4>
                  <p className="text-soft-white/70 leading-relaxed italic">
                    {lang === 'EN'
                      ? "The above is a preliminary Financial Needs Analysis (FNA). Based on your cross-border asset characteristics, Francis will design at least two compliant schemes for your comparison. I will contact you shortly via the contact information provided."
                      : "上述為初步的財務需要分析(FNA)預檢。基於您的跨境資產特徵，池老C將為您設計不少於兩套合規方案供您比較。稍後我將通過您留下的聯繫方式與您取得聯繫。"}
                  </p>
                </motion.div>

                <button 
                  onClick={onClose}
                  className="w-full py-4 rounded-xl border border-white/10 text-soft-white/60 hover:bg-white/5 transition-all font-bold"
                >
                  {lang === 'EN' ? "Close and Return" : "關閉並返回首頁"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface QuestionStepProps {
  title: string;
  question: string;
  options: { v: string; l: string }[];
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isValid: boolean;
  lang: string;
}

const QuestionStep: React.FC<QuestionStepProps> = ({ 
  title, question, options, value, onChange, onNext, onPrev, isValid, lang 
}) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="w-full space-y-8"
  >
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-gold">
        <Dna className="w-6 h-6" />
        <h3 className="text-xl font-serif font-bold uppercase tracking-widest">{title}</h3>
      </div>
      <p className="text-soft-white/80 text-lg">{question}</p>
      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt.v}
            onClick={() => onChange(opt.v)}
            className={`w-full p-5 rounded-2xl border text-left transition-all flex justify-between items-center ${
              value === opt.v 
                ? 'bg-gold/10 border-gold text-gold' 
                : 'bg-white/5 border-white/10 text-soft-white/60 hover:border-white/20'
            }`}
          >
            <span className="font-medium">{opt.l}</span>
            {value === opt.v && <CheckCircle2 className="w-5 h-5" />}
          </button>
        ))}
      </div>
    </div>
    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="flex items-center gap-2 text-soft-white/40 hover:text-soft-white transition-colors">
        <ChevronLeft className="w-5 h-5" /> {lang === 'EN' ? "Back" : "返回"}
      </button>
      <button 
        onClick={onNext}
        disabled={!isValid}
        className="gold-gradient text-midnight font-bold px-10 py-3 rounded-full disabled:opacity-30 flex items-center gap-2 shadow-lg shadow-gold/10"
      >
        {lang === 'EN' ? "Next" : "下一步"}
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </motion.div>
);

export default WealthDiagnosis;
