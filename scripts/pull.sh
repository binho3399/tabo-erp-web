#!/bin/bash

echo "🔄 Đang kiểm tra và lấy mã nguồn mới nhất từ GitHub (git pull origin main)..."
git pull origin main

if [ $? -eq 0 ]; then
    echo "✅ Cập nhật mã nguồn thành công!"
else
    echo "❌ Có lỗi xảy ra trong quá trình cập nhật mã nguồn."
    exit 1
fi
