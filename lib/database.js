import fs from 'fs';
import path from 'path';

// Tentukan lokasi file database
const dbPath = path.resolve('../database.json');

// Fungsi untuk memuat database dengan validasi
function loadDatabase() {
  // Periksa apakah file database ada
  if (!fs.existsSync(dbPath)) {
    // Jika tidak ada, buat file dengan struktur default
    fs.writeFileSync(dbPath, JSON.stringify({ premiumUsers: [], groupsOnly: [] }, null, 2));
  }

  // Baca isi file database
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  // Validasi struktur database
  if (!Array.isArray(db.premiumUsers)) db.premiumUsers = [];
  if (!Array.isArray(db.groupsOnly)) db.groupsOnly = [];

  return db;
}

// Fungsi untuk mengecek apakah pengguna adalah premium
function isPremiumUser(username) {
  if (!username || typeof username !== 'string') {
    console.error('Error: Username tidak valid.');
    return false;
  }

  const db = loadDatabase();
  return db.premiumUsers.includes(username);
}

// Fungsi untuk mengecek apakah grup hanya diizinkan
function isGroupOnly(groupId) {
  if (!groupId || typeof groupId !== 'string') {
    console.error('Error: Group ID tidak valid.');
    return false;
  }

  const db = loadDatabase();
  return db.groupsOnly.includes(groupId);
}

// Fungsi untuk menambahkan pengguna premium
function addPremiumUser(username) {
  if (!username || typeof username !== 'string') {
    console.error('Error: Username tidak valid.');
    return;
  }

  const db = loadDatabase();
  if (!db.premiumUsers.includes(username)) {
    db.premiumUsers.push(username);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    console.log(`User ${username} berhasil ditambahkan ke daftar premium.`);
  } else {
    console.log(`User ${username} sudah ada di daftar premium.`);
  }
}

// Fungsi untuk menambahkan grup hanya diizinkan
function addGroupOnly(groupId) {
  if (!groupId || typeof groupId !== 'string') {
    console.error('Error: Group ID tidak valid.');
    return;
  }

  const db = loadDatabase();
  if (!db.groupsOnly.includes(groupId)) {
    db.groupsOnly.push(groupId);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    console.log(`Group ID ${groupId} berhasil ditambahkan ke daftar groupsOnly.`);
  } else {
    console.log(`Group ID ${groupId} sudah ada di daftar groupsOnly.`);
  }
}

export { isPremiumUser, isGroupOnly, addPremiumUser, addGroupOnly };
