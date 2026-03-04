import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Về công ty */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Tabo ERP</h3>
                        <p className="text-sm">
                            Giải pháp công nghệ quản trị doanh nghiệp toàn diện, giúp tối ưu hóa nguồn lực và tăng cường hiệu suất kinh doanh.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Liên kết nhanh */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:text-tabo-primary transition-colors">Trang Chủ</Link>
                            </li>
                            <li>
                                <Link to="/features" className="hover:text-tabo-primary transition-colors">Tính Năng</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-tabo-primary transition-colors">Về Chúng Tôi</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-tabo-primary transition-colors">Liên Hệ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Dịch vụ */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Giải pháp</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-tabo-primary transition-colors">Quản lý tài chính</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-tabo-primary transition-colors">Quản lý nhân sự</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-tabo-primary transition-colors">Quản lý kho</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-tabo-primary transition-colors">CRM Doanh nghiệp</a>
                            </li>
                        </ul>
                    </div>

                    {/* Liên hệ */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Thông tin liên hệ</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-2 text-tabo-primary flex-shrink-0" />
                                <span>123 Đường Công Nghệ, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-2 text-tabo-primary flex-shrink-0" />
                                <span>+84 123 456 789</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-2 text-tabo-primary flex-shrink-0" />
                                <span>contact@taboerp.vn</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Tabo ERP. Tất cả quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
