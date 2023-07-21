import { Wrapper } from ".";
import { useGithubContext } from "../../Context/Context";
import { Pie3D, Doughnut2D, Column3D, Bar3D } from "../Charts";

interface ILanguage {
    label: string
    value: number,
    stars: number
}

const Repos = () => {

    const { repos } = useGithubContext()

    let languages = repos.reduce((total: Record<string, ILanguage>, item: any) => {
        const { language, stargazers_count } = item
        if (!language) {
            return total
        }
        if (!total[language]) {
            total[language] = { label: language, value: 1, stars: stargazers_count }
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            }
        }
        return total
    }, {})
    // console.log(languages);

    const mostUsed = Object.values<ILanguage>(languages)
        .map(({ label, value }) => { return { label, value } })
        .sort((a, b) => {
            return b.value - a.value
        })
        .slice(0, 5)
    // console.log(mostUsed);

    // MOST STARTS
    const mostPopular = Object.values<ILanguage>(languages)
        .map((item) => { return { ...item, value: item.stars } })
        .sort((a, b) => {
            return b.stars - a.stars
        })
        .slice(0.5)
    // console.log(mostPopular);

    // Stars, Forks
    let { stars, forks } = repos.reduce((total: any, item: any) => {
        const { stargazers_count, name, forks } = item
        total.stars[stargazers_count] = { label: name, value: stargazers_count }
        total.forks[forks] = { label: name, value: forks }
        return total
    }, { stars: {}, forks: {} })
    //Starts
    stars = Object.values(stars).slice(-5).reverse()
    //Forks
    forks = Object.values(forks).slice(-5).reverse()
    // console.log(forks);

    // const chartData = [
    //     {
    //         label: "HTML",
    //         value: "13"
    //     },
    //     {
    //         label: "CSS",
    //         value: "23"
    //     },
    //     {
    //         label: "Javascript",
    //         value: "80"
    //     }
    // ];

    return (
        <section className="section">
            <Wrapper className="section-center">
                <Pie3D data={mostUsed} />
                <Column3D data={stars} />
                <Doughnut2D data={mostPopular} />
                <Bar3D data={forks} />
            </Wrapper>
        </section>
    )
}
export default Repos