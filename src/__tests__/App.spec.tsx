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
    const { asFragment } = renderWithUsersContext(<App />, context)
    
    expect(asFragment()).toMatchSnapshot();
  })
});
