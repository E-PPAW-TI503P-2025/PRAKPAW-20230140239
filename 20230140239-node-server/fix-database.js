const { Sequelize } = require('sequelize');
const config = require('./config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
        logging: console.log
    }
);

async function fixDatabase() {
    try {
        await sequelize.authenticate();
        console.log('✓ Koneksi database berhasil!');

        // Drop foreign key constraint jika ada
        await sequelize.query(`
            SET FOREIGN_KEY_CHECKS = 0;
        `);
        
        console.log('Menghapus foreign key constraints...');

        // Hapus semua data di tabel Presensis
        await sequelize.query(`
            TRUNCATE TABLE Presensis;
        `);
        
        console.log('✓ Data di tabel Presensis telah dihapus');

        // Enable kembali foreign key checks
        await sequelize.query(`
            SET FOREIGN_KEY_CHECKS = 1;
        `);

        console.log('✓ Database telah diperbaiki!');
        console.log('Silakan restart server Anda.');
        
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

fixDatabase();
