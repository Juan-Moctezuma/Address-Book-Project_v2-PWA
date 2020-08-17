const tablekey = 'ab-table';
let abTable;

/*let clrBtn = document.getElementById('clrBtn');
clrBtn.addEventListener('click', () => {
    localStorage.removeItem(tablekey);
});*/

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js", {scope: './'})
}

// JSON object
let abTableDemo = {
    'Bart Simpson': {
        'phone': '787-737-3810',
        'email': 'bart@thesimpsons.com',
        'address': '123 Fake Street, Portland, OR 97215'
    },
    'Mickey Mouse': {
        'phone': '319-321-7270',
        'email': 'mickey_m@disneyland.com',
        'address': '511 E Mickey Avenue, Los Angeles, CA 90013'
    },
    'John Doe': {
        'phone': '619-100-1009',
        'email': 'john.doe@gmail.com',
        'address': '432 N John Doe BLVD, New York, NY 10001'
    },
    'Sarah Doe': {
        'phone': '223-987-1005',
        'email': 'sarah_doe1990@hotmail.com',
        'address': '3997 Harrison Street, Batesville, AR 72403'
    }
};

let enableDisableNameInput = (option) => {
    let newPersonName = document.getElementById("newPersonName");
    if (option === 'enable') {
        newPersonName.disabled = false;
    } else if (option === 'disable') {
        newPersonName.disabled = true;
    }
}

let deleteUserFromTable = (userName) => {
    let tempTable = {};
    let abTableKeys = Object.keys(abTable);
    for (let i = 0; i < abTableKeys.length; i++) {
        if (userName !== abTableKeys[i]) {
            tempTable[abTableKeys[i]] = abTable[abTableKeys[i]];
        }
    }
    abTable = tempTable;
    localStorage.setItem(tablekey, JSON.stringify(abTable));
    refreshABTable();
}

let refreshABTable = () => {
    let abTableKeys = Object.keys(abTable); // This will create an array
    let tableContainer = document.getElementById('abTableContainer');
    let oldTableBody = document.getElementById('tableBody');
    let newTableBody = document.createElement('span');

    tableContainer.removeChild(oldTableBody);
    newTableBody.id = 'tableBody';
    tableContainer.appendChild(newTableBody);

    for (let i = 0; i < abTableKeys.length; i++) {
        let currentRow = document.createElement('div');
        let currentNameCol = document.createElement('div');
        let currentPhoneCol = document.createElement('div');
        let currentEmailCol = document.createElement('div');
        let currentAddressCol = document.createElement('div');
        let currentEditBtn = document.createElement('div');
        let currentDeleteBtn = document.createElement('div');

        currentRow.className = 'ab-table-row';
        currentNameCol.className = 'ab-table-col ab-name';
        currentPhoneCol.className = 'ab-table-col ab-phone';
        currentEmailCol.className = 'ab-table-col ab-email';
        currentAddressCol.className = 'ab-table-col ab-address';
        currentEditBtn.className = 'ab-table-col ab-edit';
        currentDeleteBtn.className = 'ab-table-col ab-delete';

        currentNameCol.innerHTML = abTableKeys[i];
        currentPhoneCol.innerHTML = abTable[abTableKeys[i]].phone;
        currentEmailCol.innerHTML = abTable[abTableKeys[i]].email;
        currentAddressCol.innerHTML = abTable[abTableKeys[i]].address;

        currentEditBtn.innerHTML = '<i class="fas fa-user-edit"></i>';
        currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

        currentRow.appendChild(currentNameCol);
        currentRow.appendChild(currentPhoneCol);
        currentRow.appendChild(currentEmailCol);
        currentRow.appendChild(currentAddressCol);
        currentRow.appendChild(currentEditBtn);
        currentRow.appendChild(currentDeleteBtn);
        newTableBody.appendChild(currentRow);
    }

    // option arg will be: disabled or enabled (Please note on css .disable-modal & .enable-modal)
    let enableDisableNewUserModal = (option) => {
        let newPersonName = document.getElementById('newPersonName');
        let newPersonPhone = document.getElementById('newPersonPhone');
        let newPersonEmail = document.getElementById('newPersonEmail');
        let newPersonAddress = document.getElementById('newPersonAddress');

        newPersonName.value = '';
        newPersonPhone.value = '';
        newPersonEmail.value = '';
        newPersonAddress.value = '';

        let newPersonModal = document.getElementById('newPersonModal');
        let backdrop = document.getElementById('backdrop');

        newPersonModal.className = `${option}-modal`;
        backdrop.className = `${option}-modal`;
    }

    let addNewEntryBtn = document.getElementById('addNewEntry');
    let editBtns = document.getElementsByClassName('ab-edit');
    let deleteBtns = document.getElementsByClassName('ab-delete');

    let newPersonSubmitBtn = document.getElementById('newPersonSubmitBtn');
    let newPersonCancelBtn = document.getElementById('newPersonCancelBtn');
    let form = document.getElementById('formAddUser');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    newPersonSubmitBtn.addEventListener('click', () => {
        let name = document.getElementById('newPersonName');
        let phone = document.getElementById('newPersonPhone');
        let email = document.getElementById('newPersonEmail');
        let address = document.getElementById('newPersonAddress');

        let newPersonName = name.value.trim();
        let newPersonPhone = phone.value.trim();
        let newPersonEmail = email.value.trim();
        let newPersonAddress = address.value.trim();

        document.getElementById('g1').style.display = "initial";
        document.getElementById('g2').style.display = "initial";
        document.getElementById('g3').style.display = "initial";
        document.getElementById('g4').style.display = "initial";
        document.getElementById('r1').style.display = "initial";
        document.getElementById('r2').style.display = "initial";
        document.getElementById('r3').style.display = "initial";
        document.getElementById('r4').style.display = "initial";
        document.getElementById('m1').style.display = "initial";
        document.getElementById('m2').style.display = "initial";
        document.getElementById('m3').style.display = "initial";
        document.getElementById('m4').style.display = "initial";

        if (newPersonName === '') {
            setErrorFor(name, 'Name cannot be blank');
        } else {
            setSuccessFor(name);
        }
    
        if (newPersonPhone === '') {
            setErrorFor(phone, 'Phone cannot be blank');
        } else if (!isPhone(newPersonPhone)) {
            setErrorFor(phone, 'Phone number is not valid - Avoid parentheses, letters and whitespaces');
        } else {
            setSuccessFor(phone);
        }
    
        if (newPersonEmail === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isEmail(newPersonEmail)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }
    
        if (newPersonAddress === '') {
            setErrorFor(address, 'Address cannot be blank');
        } else {
            setSuccessFor(address);
        }
        
        function setErrorFor(input, message) {
            const formControl = input.parentElement; // .form-ctrl
            const small = formControl.querySelector('small');

            // Add Error message inside small
            small.innerText = message;

            // Add error class
            formControl.className = 'form-ctrl error';
        }

        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-ctrl success'
        }

        function isPhone(phone) {
            let phoneRegex = new RegExp (['(^NA$)|^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'].join(''));
            return phoneRegex.test(phone);
        }

        function isEmail(email) {
            let emailRegex = new RegExp (['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
                                          '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
                                          '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
                                          '[a-zA-Z]{2,}))|(^NA)$'].join(''));
            return emailRegex.test(email);
        }

        if (newPersonName !== ''
            && (newPersonPhone !== '' && isPhone(newPersonPhone) === true)
            && (newPersonEmail !== '' && isEmail(newPersonEmail) === true)
            && newPersonAddress !== '') {
                abTable[newPersonName] = {
                    'phone': newPersonPhone,
                    'email': newPersonEmail,
                    'address': newPersonAddress
                };

                localStorage.setItem(tablekey, JSON.stringify(abTable));
                enableDisableNewUserModal('disable');
                
                document.getElementById('g1').style.display = "none";
                document.getElementById('g2').style.display = "none";
                document.getElementById('g3').style.display = "none";
                document.getElementById('g4').style.display = "none";
                document.getElementById('r1').style.display = "none";
                document.getElementById('r2').style.display = "none";
                document.getElementById('r3').style.display = "none";
                document.getElementById('r4').style.display = "none";
                document.getElementById('m1').style.display = "none";
                document.getElementById('m2').style.display = "none";
                document.getElementById('m3').style.display = "none";
                document.getElementById('m4').style.display = "none";

                refreshABTable();
        }
    });
    
    newPersonCancelBtn.addEventListener('click', () => {
        enableDisableNewUserModal('disable');
    });

    addNewEntryBtn.addEventListener('click', () => {
        document.getElementById('newPersonName').className = '';
        document.getElementById('newPersonPhone').className = '';
        document.getElementById('newPersonEmail').className = '';
        document.getElementById('newPersonAddress').className = '';
        
        enableDisableNewUserModal('enable');
        enableDisableNameInput('enable');
    });

    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', ($event) => {
            let nameToEdit = $event.target.parentElement.children[0].innerText;
            let personToEdit = abTable[nameToEdit];

            enableDisableNewUserModal('enable');

            let newPersonName = document.getElementById('newPersonName');
            let newPersonPhone = document.getElementById('newPersonPhone');
            let newPersonEmail = document.getElementById('newPersonEmail');
            let newPersonAddress = document.getElementById('newPersonAddress');

            newPersonName.value = nameToEdit;
            newPersonPhone.value = personToEdit.phone;
            newPersonEmail.value = personToEdit.email;
            newPersonAddress.value = personToEdit.address;
            
            enableDisableNameInput('disable');
        })
    }

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', ($event) => {
            let nameToDelete = $event.target.parentElement.children[0].innerText;
            let isSure = window.confirm('Are you sure you want to delete ' + nameToDelete + '?');
            if (isSure) {
                deleteUserFromTable(nameToDelete);
            }
        })
    }
}

let init = () => {
    // If the item exists then it will be grabbed
    if (localStorage.getItem(tablekey)) {
        abTable = JSON.parse(localStorage.getItem(tablekey));
    // If no item exists then it will pick the hard-coded demo
    } else {
        abTable = abTableDemo;
        localStorage.setItem(tablekey, JSON.stringify(abTable));
    }

    refreshABTable();
}

init();

// Reference:
// https://www.digitalocean.com/community/tutorials/js-vanilla-pwa