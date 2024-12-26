function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Tampilkan section yang dipilih
    document.getElementById(sectionId).style.display = 'block';
}

// Tampilkan dashboard secara default saat halaman dimuat
window.onload = () => {
    showSection('dashboard');
};
