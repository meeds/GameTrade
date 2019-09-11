const POSTS_API_PATH = process.env.VUE_APP_POSTS_API_PATH;

export function getGames() {
    console.info("calling ..", POSTS_API_PATH);
    return fetch(POSTS_API_PATH).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}
