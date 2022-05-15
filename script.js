var xhr = new XMLHttpRequest();
xhr.open('GET', 'employees.json');

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            var employees1 = JSON.parse(xhr.responseText);
            var html1 = '<ul>';
            for(var i=0; i < employees1.length; i++) {
                html1 += '<li>' + employees1[i].name +'</li>';
            }
            html1 += '</ul>';

            document.getElementById('employees1').innerHTML = html1;
        }
    }
};

xhr.send();