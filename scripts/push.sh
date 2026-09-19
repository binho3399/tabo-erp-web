#!/bin/bash

set -euo pipefail

# Lấy tin nhắn commit từ tham số đầu vào, nếu không có thì dùng mặc định với thời gian hiện tại
COMMIT_MSG=${1:-"Cập nhật dự án ngày $(date +'%Y-%m-%d %H:%M:%S')"}
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "📦 Đang thêm các thay đổi (git add -A)..."
git add -A

if git diff --cached --quiet; then
  echo "ℹ️ Không có thay đổi để commit."
  exit 0
fi

echo "📝 Đang tạo commit: '$COMMIT_MSG'..."
git commit -m "$COMMIT_MSG"

echo "🚀 Đang đẩy dữ liệu lên GitHub (git push origin $CURRENT_BRANCH)..."
git push origin "$CURRENT_BRANCH"

echo "✅ Hoàn tất việc đồng bộ lên GitHub!"
