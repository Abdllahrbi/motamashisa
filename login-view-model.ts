import { Observable } from '@nativescript/core';

export class LoginViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';

    constructor() {
        super();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    onLoginTap() {
        // TODO: Implement login logic
        console.log('Login tapped');
    }

    onGoogleTap() {
        // TODO: Implement Google sign-in
        console.log('Google sign-in tapped');
    }

    onAppleTap() {
        // TODO: Implement Apple sign-in
        console.log('Apple sign-in tapped');
    }

    onRegisterTap() {
        // TODO: Navigate to registration page
        console.log('Register tapped');
    }
}