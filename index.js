   let count = 0;
   let price = 200;

        document.getElementById("btnadd_cart").addEventListener("click", function() {
            count ++;
            document.getElementById("counter").textContent = count;
             document.getElementById("price").textContent = count  * price;
        });
    	document.getElementById("btnadd_cart2").addEventListener("click", function() {
             if (count > 0) {
        count--;
        document.getElementById("counter").textContent = count;
        document.getElementById("price").textContent = count * price;
    }
});

   