(function () {

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var cell = document.getElementById('cell');
        var zipTail = document.getElementById('zip-tail');
        var address = document.getElementById('address');
        var number = document.getElementById('number');
        var district = document.getElementById('district');
        var city = document.getElementById('city');
        var state = document.getElementById('state');

        var buttonSave = document.getElementById('buttonSave');
        var buttonDelete = document.getElementById('buttonDelete');

        /* var inputs = 'Name: ' + name + 'Email: ' + email + 'Phone: ' + phone + "Cell: " + cell + 'Zip: ' + zipTail + 'Address: ' + address + 'Number: ' + number + 'District: ' + district + 'City: ' +city + 'State: ' +state; */


        buttonDelete.onclick = function(){

        };

    function save(key, value){
        localStorage[key] = JSON.stringify(value);
    }

    function loadFormValues(){
        name.value;
        email.value;
        phone.value;
        cell.value;
        zipTail.value;
        /* console.log(address.value);
        console.log(number.value);
        console.log(district.value);
        console.log(city.value);
        console.log(state.value);  */

        var signup = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            cell: cell.value,
            zipTail: zipTail.value,
            /* address: address.value,
            number: number.value,
            district: district.value,
            city: city.value,
            state: state.value,  */
        };


        save('signup', signup);

    }

    buttonSave.onclick = function(){
        loadFormValues();
    };

})();
