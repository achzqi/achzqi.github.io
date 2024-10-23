function toggleMenu() {
    var navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
}

// Toggle dark mode
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Update button text based on current mode
    if(body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
$(document).ready(function() {
    $('#search').keyup(function() {
        let query = $(this).val();
        if (query != '') {
            $.ajax({
                url: "live_search.php",
                method: "POST",
                data: {query: query},
                success: function(data) {
                    $('#searchResult').html(data);
                }
            });
        } else {
            $('#searchResult').html('');
        }
    });
});

