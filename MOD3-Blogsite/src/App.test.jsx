import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import "@testing-library/jest-dom/vitest";
import App from "./App";
import blog from "./Blog";


test('renders blog name, logo, and one article per post', () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(blog.name);
    expect(screen.getByAltText("blog logo")).toHaveAttribute("src", blog.image);
    expect(screen.getByText(blog.about)).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(blog.posts.length);
});