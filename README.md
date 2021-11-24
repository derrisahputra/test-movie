# Project Aplikasi Movie dan TV Show

## Deploy Link / Live Demo

https://test-movie-application.herokuapp.com/

## API yang digunakan dalam pembuatan project ini

The Movie Database Support



Sebelum memulai konfigurasi project, pastikan terlebih dahulu kamu telah membaca dan mengikuti aturan dalam penggunaan API yang telah disediakan.

Dalam menggunakan API, kamu akan membutuhkan API KEY yang diberikan oleh website tersebut.

Langkah ke 1:

Lakukan registrasi pada akun di https://www.themoviedb.org/signup

Langkah ke 2:

Masuk ke https://www.themoviedb.org/documentation/api

Langkah ke 3:

Generate API KEY

![api_step_4-1534865184](https://user-images.githubusercontent.com/59188308/143162579-34d554d9-2cf1-4387-bc69-84f33a756fa0.png)

Langkah ke 4:

Kamu dapat menyalin API KEY seperti yang ditampilkan pada halaman dibawah ini atau kamu akan menerima email dari staff TMDB bagaimana cara penggunaan API KEY

![image_2021-11-24_095652](https://user-images.githubusercontent.com/59188308/143163347-792cf2c8-6f51-4906-9441-1043ab51b100.png)

Selesai! Selanjutnya kamu ikuti langkah-langkah dibawah ini

## Membuat Project Baru
1. Inisialisasi project
```
vue create <nama_project_kamu>
```
2. Pilih preset/features yang diinginkan, apakah dengan Vue 2 atau Vue 3
3. Setelah semua dipilih dan sesuai, sistem akan melakukan persiapan inisialisasi project kamu secara otomatis
4. Setelah inisialisasi selesai, masuk ke dalam folder project yang telah dibuat
```
cd <nama_project_kamu>
```
5. Buka project kamu dengan text editor yang dimiliki
6. Pada Terminal atau console, kamu bisa jalankan project dengan cara dibawah ini
```
npm run serve
```
7. Buka url dibawah pada browser
```
http://localhost:8080/
```

## Setting .env
1. Install dotenv
```
npm install dotenv --save
```
2. Buat sebuah file baru dan beri nama
```
.env
```
3. Buat sebuah variabel di dalam file .env
```
VUE_APP_API_KEY={value}
```
value diatas isi dengan API KEY yang telah kamu dapatkan sebelumnya.

Contoh:
```
VUE_APP_API_KEY=123456789011231232
```
note: Tidak boleh ada spasi antara variabel, sama dengan, dan valuenya.



# CLONE PROJECT

## Clone
```
git clone https://github.com/derrisahputra/test-movie.git
```

## Install NPM
```
npm install
```

### Jalankan Dengan
```
npm run serve
```
