
import React, { useMemo } from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#111] border border-white/10 p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">{label}</p>
        <p className="text-white font-bold text-sm font-mono">
           €{payload[0].value.toLocaleString('sl-SI', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  
  const chartConfig = useMemo(() => {
    // Generate data for 3 weeks (21 days)
    const points = 21;
    const start = 3200; // Starting revenue
    const end = 15240.50; // Current revenue
    
    const data = [];
    const today = new Date();
    
    for (let i = 0; i < points; i++) {
        // Sigmoid-ish curve for "viral" growth look
        const x = i / (points - 1);
        const curve = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        
        // Add some noise
        const noise = (Math.random() - 0.5) * (end - start) * 0.1;
        let val = start + (end - start) * curve + noise;
        
        // Ensure strictly positive and generally increasing for the visual
        val = Math.max(start, val);
        
        // Date label (working backwards from today)
        const d = new Date(today);
        d.setDate(today.getDate() - (points - 1 - i));
        const day = d.getDate();
        const month = d.getMonth() + 1;
        
        data.push({ date: `${day}.${month}.`, value: val });
    }
    
    // Set exact end value
    data[data.length - 1].value = end;

    return {
        data,
        total: '€15,240.50',
        growth: '+376%',
        label: 'v zadnjih 3 tednih'
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto relative group">
       {/* Glow effect */}
       <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-green-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

       {/* Card Container */}
       <div className="bg-[#0a0a0a] border border-white/10 rounded-[1.8rem] p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl z-10 h-full flex flex-col justify-between">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
              <div>
                  <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                     Total Revenue
                  </h3>
                  <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight tabular-nums transition-all duration-300">
                        {chartConfig.total}
                      </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                      <span className="flex items-center text-green-500 text-xs font-bold bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20 transition-all">
                          <TrendingUp size={10} className="mr-1" /> {chartConfig.growth}
                      </span>
                      <span className="text-gray-500 text-xs font-medium transition-all">{chartConfig.label}</span>
                  </div>
              </div>
              <div className="bg-white/5 p-2 rounded-full border border-white/5 group-hover:bg-white/10 transition-colors cursor-pointer hover:border-brand-gold/30">
                 <DollarSign className="text-brand-gold w-5 h-5" />
              </div>
          </div>

          {/* Chart Section */}
          <div className="relative h-48 w-full -ml-2">
              <ResponsiveContainer width="105%" height="100%">
                <AreaChart data={chartConfig.data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00B67A" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#00B67A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip content={CustomTooltip} cursor={{ stroke: 'white', strokeWidth: 1, strokeOpacity: 0.1, strokeDasharray: '4 4' }} />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00B67A" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={1500}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#fff' }}
                  />
                  <XAxis dataKey="date" hide />
                </AreaChart>
              </ResponsiveContainer>
          </div>

       </div>
    </div>
  );
};
