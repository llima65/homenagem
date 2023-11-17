<script>
// Adiciona o comportamento de clicar para revelar a mensagem
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    })
});
</script>