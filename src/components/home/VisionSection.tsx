
import { Badge } from '@/components/ui';

const VisionSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-slate-950 relative overflow-hidden text-left transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {[
                        { title: "Trọng Tâm", text: "Ưu tiên chiến lược rõ ràng, tăng trưởng bền vững và kết quả đo lường cụ thể." },
                        { title: "Cách Tiếp Cận", text: "Kết hợp dữ liệu và giải pháp tinh chỉnh, biến chiến lược thành kết quả thiết thực." },
                        { title: "Kinh Nghiệm", text: "Tháo gỡ rào cản quản trị và mở khóa tiềm năng phát triển vượt bậc cho doanh nghiệp." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col transition-colors">
                            <div className="mb-6 flex items-center gap-4">
                                <Badge variant="primary">0{i + 1}</Badge>
                                <div className="h-[3px] flex-1 rounded-full bg-[#0070F3] dark:bg-blue-500" />
                            </div>
                            <h3 className="text-[20px] lg:text-[28px] font-normal mb-4 text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">{item.title}</h3>
                            <p className="text-base text-slate-500 dark:text-slate-400 font-normal leading-relaxed mb-10 max-w-sm transition-colors">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
