const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api`;

const fetchSingleUser = async (Id, token, setSelectedUser) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch user #${Id}`);
    }
    const userData = await response.json();
    console.log(`Fetched user #${Id}:`, userData);
    setSelectedUser(userData.data.users);
  } catch (err) {
    console.error(`Error fetching user #${Id}!`, err);
  }
};

export default fetchSingleUser;
