import Accordion from '../common/Accordion';
import Badge from '../common/Badge';

const ContactFAQ: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left lg:text-center mb-8 lg:mb-16 flex flex-col items-start lg:items-center">
                    <Badge variant="primary" className="mb-4 md:mb-5 uppercase">Giải đáp thắc mắc</Badge>
                    <h2 className="text-[28px] md:text-5xl font-normal text-slate-900 tracking-tight mb-4 md:mb-5">Câu hỏi <span className="text-blue-500">thường gặp</span></h2>
                    <p className="text-base text-slate-500 max-w-2xl font-normal">Những câu hỏi phổ biến khi khách hàng liên hệ với Tabo.</p>
                </div>

                <Accordion 
                    items={[
                        { q: "Thời gian phản hồi thông thường là bao lâu?", a: "Đội ngũ CSKH của chúng tôi cam kết phản hồi các yêu cầu hỗ trợ trong vòng tối đa 2 giờ làm việc kể từ khi nhận được yêu cầu trên hệ thống." },
                        { q: "Tabo có hỗ trợ demo trực tiếp không?", a: "Có, chúng tôi hỗ trợ demo trực tiếp 1-1 qua Google Meet hoặc Zoom để hướng dẫn chi tiết các phân hệ phù hợp với nghiệp vụ doanh nghiệp của bạn." },
                        { q: "Chính sách dùng thử như thế nào?", a: "Tabo cung cấp gói dùng thử 14 ngày miễn phí với đầy đủ phân hệ. Trong thời gian này, bạn sẽ nhận được sự hỗ trợ setup hoàn toàn từ chuyên gia." },
                        { q: "Làm sao để yêu cầu tích hợp tính năng riêng?", a: "Bạn có thể điền form liên hệ và nêu rõ yêu cầu ở phần Lời nhắn, đội ngũ kỹ thuật sẽ trao đổi để khảo sát và đưa ra lộ trình tích hợp (Custom ERP)." },
                        { q: "Dữ liệu của tôi có được bảo mật không?", a: "Tất cả dữ liệu được mã hóa chuẩn AES-256 và lưu trữ trên hạ tầng đám mây đạt tiêu chuẩn quốc tế, đảm bảo an toàn tuyệt đối." },
                        { q: "Tabo ERP có thể tích hợp với các hệ thống khác không?", a: "Chúng tôi hỗ trợ API mở cho phép kết nối linh hoạt với các phần mềm kế toán, CRM, ngân hàng và các nền tảng thương mại điện tử phổ biến." },
                        { q: "Tôi có thể nâng cấp gói dịch vụ sau này không?", a: "Hoàn toàn có thể. Doanh nghiệp có thể nâng cấp lên các gói cao hơn hoặc bổ sung thêm user bất cứ lúc nào một cách nhanh chóng ngay trên website." },
                        { q: "Có hỗ trợ hướng dẫn sử dụng cho nhân viên không?", a: "Chúng tôi cung cấp thư viện video hướng dẫn, tài liệu chi tiết và các buổi training trực tiếp tùy theo quy mô của gói dịch vụ bạn lựa chọn." },
                        { q: "Tabo có hỗ trợ chuyển đổi dữ liệu cũ không?", a: "Có. Đội ngũ kỹ thuật hỗ trợ nhập liệu và cấu trúc lại dữ liệu từ file Excel hoặc từ phần mềm cũ sang hệ thống của Tabo hoàn chỉnh." },
                        { q: "Chi phí triển khai ban đầu bao gồm những gì?", a: "Tùy thuộc vào gói dịch vụ, thông thường bao gồm phí bản quyền sử dụng, phí thiết lập ban đầu và phí đào tạo nhân sự trực tuyến hoặc offline." }
                    ].map(item => ({ question: item.q, answer: item.a }))} 
                    columns={2}
                />
            </div>
        </section>
    );
};

export default ContactFAQ;
