const URL = process.env.REACT_APP_API_URL;

export async function getSingleCourse(id) {
  try {
    const res = await fetch(`${URL}/courses/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}
