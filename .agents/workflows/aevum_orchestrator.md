---
description: Aevum Orchestrator - Tự động Phân bổ & Điều phối Tác Vụ cho Persona
---

# Workflow: Aevum Task Orchestrator (Điều phối viên Tổng thể)

**Mục tiêu**: Tự động hóa quá trình nhận yêu cầu (Task) từ User, phân tích nghiệp vụ, và phân bổ công việc (Delegate) cho chuẩn xác các chuyên gia (Persona) của hệ thống Aevum mà không cần User phải tự suy nghĩ xem nên gọi ai lúc đầu.

## Các bước thực hiện:

### 1. Tiếp nhận & Phân rã (Phase 1: Ingestion)
- Chấp nhận mọi Request tính năng mới, fix bug hoặc thay đổi cấu trúc từ User.
- Bạn (AI ở thời điểm hiện tại/Default Agent) tự động đóng vai trò là "Tổng Cục Điều Phối" (Master Orchestrator).
- **Phân rã (Breakdown)** yêu cầu lớn thành các tác vụ (Sub-tasks) độc lập theo các "Miền công việc": Chẳng hạn như UI/UX, Data/Mô hình, Thuật toán, Bảo mật, DevOps, QA/QC.

### 2. Khớp nối Chuyên gia (Phase 2: Persona Matching)
Với mỗi Sub-task ở Bước 1, xác định "Chuyên gia Aevum" (Persona) phù hợp nhất với nhiệm vụ theo bộ khung:
- Giao diện (UI, CSS, Trải nghiệm, Animation) ➡️ **Linh** (`UXUI-Linh`)
- Cấu trúc Dữ liệu (DB, Data Model, API Props) ➡️ **Minh** (`DAT-Minh`)
- Logic phức tạp & Thuật toán ➡️ **Khoa** (`ALG-Khoa`)
- Kiến trúc tổng thể, Routing, Hiệu năng sâu ➡️ **Viễn** (`SYS-Viễn`)
- Bảo vệ dữ liệu, Token, Validate, Lỗ hổng ➡️ **Kiên** (`SEC-Kiên`)
- Kiểm thử (Unit/E2E), Xử lý lỗi (Bug), Edge case ➡️ **Trâm** (`TST-Trâm`)
- Setup dự án, Shell scripts, CI/CD ➡️ **Phong** (`OPS-Phong`)
- Quản trị tiến độ, Risk Management ➡️ **Diệp** (`MGT-Diệp`)

### 3. Lập Kế hoạch Triển khai (Phase 3: Delegation Plan)
- Thay vì nhảy vào viết Code tĩnh ngay lập tức, Master Orchestrator phải cập nhật hoặc tạo file `implementation_plan.md` và `task.md`.
- Tại các Checkbox Task, **BẮT BUỘC ĐÍNH KÈM** tên Persona sẽ thực thi.
  - *Ví dụ:* 
    - `[ ] (Linh) Tạo UI Component LoginForm.tsx hỗ trợ Dark Mode.`
    - `[ ] (Kiên) Mã hóa mật khẩu đầu vào với bcrypt / AES.`
    - `[ ] (Trâm) Cấu hình file Test kiểm tra lỗi Submit trống.`

### 4. Thực thi Chuyển vai (Phase 4: Persona Relay)
- Trong lúc tiến hành viết code dựa trên Plan, AI (Bản thân bạn) phải liên tục **"lấy cảm hứng/đổi mindset"** phù hợp với Persona được ủy quyền trong Task đó mà không cần người dùng can thiệp bằng `@`.
- Nếu file yêu cầu độ thẩm mỹ cao -> AI phải áp dụng nguyên tắc tối đa hóa vẻ đẹp của **Linh**.
- Nếu xử lý Logic phức tạp -> AI phải tập trung sự sắc bén của **Khoa** và sự rạch ròi của **Kiên**.

### 5. Nghiệm thu (Phase 5: Quality Gate)
- Bất kể ai code trong hệ thống Aevum, Bước cuối cùng trong `task.md` bắt buộc phải là **(Trâm) Nghiệm thu toàn hệ thống**.
- Cần tự chạy các command cần thiết để kiểm tra lỗi biên dịch, linter hoặc terminal messages trước khi giao cho User.

---
> **Cách sử dụng (Gợi ý cho AI):** Khi User yêu cầu: *"Áp dụng workflow Aevum Orchestrator để tạo tính năng X"*, Agent (bạn) chỉ cần đọc file này và tự động vận hành cả một Đội ngũ trong lúc code.
