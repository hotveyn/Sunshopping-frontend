
//todo: Дополнить вывод ошибок
export const FormRequest = function (this: any, url: string, method: string = "GET", body: any = {}, params = {}) {
    async function goSend() {
        if (method === "GET") {
            let response = await fetch(url + "?" + new URLSearchParams(params));
            if (response.ok) {
                return response;
            }
        } else {
            let response = await fetch(url, {
                method: method,
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            console.log(body)
            if (response.ok) {
                return response;
            }
        }
    }

    return {goSend}
};
