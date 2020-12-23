const APIController = (function() {

    const clientId = '4500f049073c43faa80cdfbb2ac0d1ef';
    const clientSecret = 'f48e49c3cdb04cd3b2d2548e7c6962a6';

    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/authorize', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
})();

