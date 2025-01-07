// Get all FAQ items
const faqs = document.querySelectorAll('.faq');
        
faqs.forEach(faq => 
{
faq.addEventListener("click", () => 
{

        // Close all other FAQs
        faqs.forEach(item => 
        {
        if (item !== faq) 
                {
                  item.classList.remove('active');
                }
        });

// Toggle the active class
faq.classList.toggle('active');


});
});