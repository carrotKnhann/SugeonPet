# Deploy pet.sugeonarea.com

## DNS (Hostinger / panel hiện tại)

Thêm bản ghi giống `dungeon`:

| Loại  | Tên | Nội dung               | TTL   |
|-------|-----|------------------------|-------|
| CNAME | pet | carrotknhann.github.io | 14400 |

Không tạo A record cho `pet`.

## GitHub Pages

- Repo: `carrotKnhann/SugeonPet`
- Source: branch `main` → `/`
- Custom domain: `pet.sugeonarea.com` (file `CNAME` trong repo)

Sau khi DNS xanh, bật **Enforce HTTPS** trong Settings → Pages.
