# 📸 PANDUAN UPLOAD FOTO PROFILE

## Cara Upload Foto Anda ke About Section

### Step 1: Siapkan Foto

- Gunakan foto dengan kualitas baik (minimal 500x500px)
- Format: JPG atau PNG
- Aspect Ratio: Square (1:1) lebih bagus
- Nama file: `profile.jpg` atau `profile.png`

### Step 2: Copy Foto

Copy foto Anda ke folder:

```
public/assets/images/profile.jpg
```

### Step 3: Update Code

Buka file: `components/sections/About.tsx`

Cari code ini (sekitar line 65-75):

```tsx
{
  /* Uncomment dan ganti path setelah foto diupload */
}
{
  /* <Image
  src="/assets/images/profile.jpg"
  alt="Bagas Aji Handoko"
  width={500}
  height={500}
  className="object-cover w-full h-full"
  priority
/> */
}
```

Hapus `{/*` dan `*/}` untuk uncomment, jadi seperti ini:

```tsx
<Image
  src="/assets/images/profile.jpg"
  alt="Bagas Adhi Nugraha"
  width={500}
  height={500}
  className="object-cover w-full h-full"
  priority
/>
```

### Step 4: Hapus Placeholder

Hapus/comment code placeholder (div dengan GraduationCap icon) di atas code Image tadi.

### Step 5: Save & Refresh

Save file dan refresh browser, foto Anda akan muncul!

---

## 📷 Tips Foto Profile yang Bagus:

1. ✅ **Professional Look** - Pakai foto formal/semi-formal
2. ✅ **Good Lighting** - Pencahayaan bagus, hindari backlight
3. ✅ **Clean Background** - Background simple/blur
4. ✅ **Face Center** - Wajah di tengah frame
5. ✅ **High Resolution** - Minimal 500x500px
6. ✅ **Square Crop** - Untuk hasil terbaik gunakan 1:1 ratio

---

## 🖼️ Contoh Struktur Folder Images:

```
public/assets/images/
├── profile.jpg                    ← Foto profile Anda
├── project-nsfw.jpg              ← Screenshot project 1
├── project-eirene.jpg            ← Screenshot project 2
├── project-web-extension.jpg     ← Screenshot project 3
├── project-elaundry.jpg          ← Screenshot project 4
├── project-baletani.jpg          ← Screenshot project 5
└── project-drawati.jpg           ← Screenshot project 6
```

---

**Need Help?** Check README.md untuk dokumentasi lengkap!
