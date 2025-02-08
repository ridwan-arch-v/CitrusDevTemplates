document.addEventListener('DOMContentLoaded', function () {
    // --- Modal Functionality ---
    var modal = document.querySelector(".modal");
    var btn = document.querySelector(".open-modal");  // Tombol untuk membuka modal
    var close = document.querySelector(".close"); // Tombol untuk menutup modal

    if (btn) {
        // Fungsi untuk membuka modal
        btn.addEventListener("click", function () {
            modal.style.display = "block";
        });

        // Fungsi untuk menutup modal
        close.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Menutup modal jika area di luar modal diklik
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // --- Tooltip Functionality ---
    var tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('mouseover', function () {
            var tooltipText = tooltip.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'visible';
            tooltipText.style.opacity = 1;
        });

        tooltip.addEventListener('mouseout', function () {
            var tooltipText = tooltip.querySelector('.tooltiptext');
            tooltipText.style.visibility = 'hidden';
            tooltipText.style.opacity = 0;
        });
    });

    // --- Scroll to Top Button ---
    var scrollTopBtn = document.createElement('button');
    scrollTopBtn.textContent = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);

    // Menyembunyikan tombol scroll jika di atas halaman
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Scroll ke atas saat tombol diklik
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Image Hover Zoom ---
    var images = document.querySelectorAll('img');

    images.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', function () {
            image.style.transform = 'scale(1)';
        });
    });

    // --- Breadcrumb Active State ---
    var breadcrumbs = document.querySelectorAll('.breadcrumb li a');
    
    breadcrumbs.forEach(function (breadcrumb) {
        breadcrumb.addEventListener('click', function () {
            breadcrumbs.forEach(function (item) {
                item.classList.remove('active');
            });
            breadcrumb.classList.add('active');
        });
    });
});
