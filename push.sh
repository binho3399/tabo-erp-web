#!/bin/bash

# Lấy tin nhắn commit từ tham số đầu vào, nếu không có thì dùng mặc định với thời gian hiện tại
COMMIT_MSG=${1:-"Cập nhật dự án ngày $(date +'%Y-%m-%d %H:%M:%S')"}

echo "📦 Đang thêm các thay đổi (git add .)..."
git add .

echo "📝 Đang tạo commit: '$COMMIT_MSG'..."
git commit -m "$COMMIT_MSG"

echo "🚀 Đang đẩy dữ liệu lên GitHub (git push origin main)..."
git push origin main

echo "✅ Hoàn tất việc đồng bộ lên GitHub!"
