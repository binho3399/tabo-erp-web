import Accordion from '../common/Accordion';
import Badge from '../common/Badge';

const PricingFAQ: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left lg:text-center mb-8 lg:mb-16 flex flex-col items-start lg:items-center">
                    <Badge variant="primary" className="mb-4 uppercase">Giải đáp thắc mắc</Badge>
                    <h2 className="text-[28px] md:text-5xl font-normal text-slate-900 tracking-tight mb-4 lg:mb-5">Giải đáp <span className="text-blue-500">thắc mắc</span></h2>
                    <p className="text-base text-slate-500 max-w-2xl font-normal">Những câu hỏi phổ biến liên quan đến biểu phí và quy trình thanh toán tại Tabo.</p>
                </div>

                <Accordion 
                    items={[
                        { q: "Có phí ẩn nào ngoài gói dịch vụ không?", a: "Tabo ERP cam kết minh bạch 100% về biểu phí. Ngoài cước phí đã thống nhất, bạn sẽ không bao giờ gặp phải các khoản phí server, phí nâng cấp hay phí tính năng ngầm." },
                        { q: "Tôi có được xuất hóa đơn VAT không?", a: "Chắc chắn rồi. Mọi giao dịch hợp pháp đăng ký gói phần mềm Tabo đều sẽ được hỗ trợ xuất Hóa đơn Giá trị gia tăng (VAT) hợp lệ 100% cho nhu cầu hạch toán." },
                        { q: "Khác biệt giữa Hộ Kinh Doanh và Gói Nâng Cao?", a: "Gói Hộ Kinh Doanh tối ưu cho quy trình 1 điểm bán lẻ cốt lõi. Gói Nâng Cao mở khóa toàn bộ nền tảng: Đa chi nhánh, hệ sinh thái API, phân quyền tùy chỉnh và chuyên gia 24/7." },
                        { q: "Hình thức thanh toán như thế nào?", a: "Chúng tôi hỗ trợ chu kỳ linh hoạt: theo 6 tháng, 1 năm hoặc 2 năm. Đặc biệt, các hợp đồng thanh toán từ 1 năm trở lên sẽ được áp dụng chính sách chiết khấu rất hấp dẫn." },
                        { q: "Chính sách nâng cấp giữa chừng ra sao?", a: "Nếu doanh nghiệp mở rộng quy mô, bạn có thể chủ động nâng cấp gói cước cao hơn bất cứ lúc nào. Hệ thống sẽ tự động đối trừ số ngày chưa dùng của gói cũ." },
                        { q: "Có hỗ trợ chính sách hoàn tiền không?", a: "Có. Chúng tôi tự tin với chính sách hoàn trả 100% số tiền trong 14 ngày đầu tiên trải nghiệm nếu giải pháp không thật sự phù hợp với quy trình hoạt động của bạn." }
                    ].map(item => ({ question: item.q, answer: item.a }))} 
                    columns={2}
                />
            </div>
        </section>
    );
};

export default PricingFAQ;
