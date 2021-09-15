import { setGithubList, setIsLoading } from "../githubReducer";

export const fetchGithubList = () => {
  return async (dispatch: any) => {
    await dispatch(setIsLoading(true));
    await fetch("https://api.github.com/search/repositories?q=stars")
      .then(async (result) => {
        const list = await result.json();
        dispatch(setGithubList(list)).finally(() =>
          dispatch(setIsLoading(false))
        );
      })
      .catch((error) => dispatch(setIsLoading(false), console.log(error)));
  };
};
