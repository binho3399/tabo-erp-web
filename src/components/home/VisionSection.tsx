
import Badge from '../common/Badge';

const VisionSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-center md:text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {[
                        { title: "Trọng Tâm", text: "Ưu tiên chiến lược rõ ràng, tăng trưởng bền vững và kết quả đo lường cụ thể." },
                        { title: "Cách Tiếp Cận", text: "Kết hợp dữ liệu và giải pháp tinh chỉnh, biến chiến lược thành kết quả thiết thực." },
                        { title: "Kinh Nghiệm", text: "Tháo gỡ rào cản quản trị và mở khóa tiềm năng phát triển vượt bậc cho doanh nghiệp." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col pt-10 border-t-[3px] border-[#0070F3]">
                            <div className="mb-6">
                                <Badge variant="primary">0{i + 1}</Badge>
                            </div>
                            <h3 className="text-2xl lg:text-[28px] font-normal mb-5 text-slate-900 tracking-tight leading-tight">{item.title}</h3>
                            <p className="text-base text-slate-500 font-light leading-relaxed mb-10 max-w-sm">
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
