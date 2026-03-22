import Accordion from '../common/Accordion';
import Badge from '../common/Badge';

const AboutFAQ: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left lg:text-center mb-8 lg:mb-16 flex flex-col items-start lg:items-center">
                    <Badge variant="primary" className="mb-4 uppercase">Giải đáp thắc mắc</Badge>
                    <h2 className="text-[28px] md:text-5xl font-normal text-slate-900 tracking-tight mb-4 lg:mb-5">Câu hỏi <span className="text-blue-500">thường gặp</span></h2>
                    <p className="text-base text-slate-500 max-w-2xl font-normal">Những câu hỏi phổ biến khi tìm hiểu giải pháp của Tabo ERP.</p>
                </div>

                <Accordion 
                    items={[
                        { q: "Thời gian triển khai thông thường là bao lâu?", a: "Phụ thuộc vào quy mô và mức độ phức tạp, thông thường quy trình triển khai chuẩn của Tabo kéo dài từ 2 đến 4 tuần cho một doanh nghiệp SME." },
                        { q: "Hệ thống có dễ sử dụng cho người không rành công nghệ?", a: "Toàn bộ giao diện của Tabo được thiết kế tối giản, tập trung vào UX/UI tối ưu nhất để bất kỳ nhân sự nào cũng có thể làm quen chỉ sau 1-2 ngày training." },
                        { q: "Chi phí nâng cấp và bảo trì hàng năm như thế nào?", a: "Tabo cung cấp chính sách miễn phí cập nhật các tính năng mới trong cơ bản. Phí bảo trì và server hàng năm sẽ được tính cố định và minh bạch theo từng gói dịch vụ." },
                        { q: "Tabo có giải pháp riêng cho từng ngành nghề không?", a: "Chúng tôi đã xây dựng sẵn nhiều phiên bản Customize đặc thù cho các ngành: Bán lẻ, Sản xuất, F&B, Logistics và Dịch vụ." },
                        { q: "Hỗ trợ khách hàng sau khi triển khai ra sao?", a: "Chúng tôi triển khai mô hình hỗ trợ 24/7 qua 3 kênh: Zalo chat, Hotline và Ticket trên hệ thống, kèm theo cam kết SLA rõ ràng cho từng sự cố." },
                        { q: "Có giới hạn số lượng user truy cập đồng thời không?", a: "Tùy thuộc vào gói dịch vụ bạn đăng ký. Tabo hỗ trợ linh hoạt từ 5 users đến không giới hạn users trên các gói Enterprise." }
                    ].map(item => ({ question: item.q, answer: item.a }))} 
                    columns={2}
                />
            </div>
        </section>
    );
};

export default AboutFAQ;
