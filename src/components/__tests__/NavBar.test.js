import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom"
import NavBar from '../NavBar'
import { CurrentUserProvider } from "../../contexts/CurrentUserContexts";

test('renders NavBar', () => {
    render(
        <Router>
            < NavBar />
        </Router>
    );

    // screen.debug();
    const signInLink = screen.getByRole('link', { name: 'Sign in' })
    expect(signInLink).toBeInTheDocument();
})

test('renders link to user profile to a logged in user', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                < NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const profileAvatar = await screen.findByText('Profile')
    expect(profileAvatar).toBeInTheDocument();
})

test('renders Sign Up and Sign In buttons again on log out', async () => {
    render(
        <Router>
            <CurrentUserProvider>
                < NavBar />
            </CurrentUserProvider>
        </Router>
    );

    const signOutLink = await screen.findByRole('link', {name: 'Sign out'})
    fireEvent.click(signOutLink);
    
    const signInLink = await screen.findByRole('link', { name: 'Sign in' })
    const signUpLink = await screen.findByRole('link', { name: 'Sign up' })

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
})