interface ILoginData {
    email: string;
    password: string;
}

interface ILoginResponse {
    token?: string;
    error?: string;
}

export async function loginUser({ email, password }: ILoginData): Promise<ILoginResponse> {
    const response = await fetch('http://localhost:8181/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        const data = await response.json();
        console.log(data);
        return { error: data.errors[0].message || 'Something went wrong, please try again later.' }
    }

    const data = await response.json();
    console.log(data);
    return { token: data.value };
}

