import { screen } from "@testing-library/react"
import App from "../pages"
import renderWithUsersContext from "../testUtils/renderWithUsersContext";

describe("App", () => {
  const context =  {
    setCurrentUser: jest.fn(),
    user: {
      id: 1,
      nickname: "Thibault",
    },
    users: [],
  };

  it("should render correctly App", () => {
    renderWithUsersContext(<App />, context)
    expect(
      screen.getByText(/Welcome/)
    ).toBeInTheDocument()
  })
});
