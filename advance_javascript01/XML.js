const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/hiteshchoudhary');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const getData = JSON.parse(this.responseText);

        document.getElementById('avatar').src = getData.avatar_url;
        document.getElementById('name').textContent = getData.name;
        document.getElementById('followers').textContent = getData.followers;
        document.getElementById('Location').textContent = getData.location ;
        document.getElementById('bio').textContent = getData.bio;
    }
};
xhr.send();