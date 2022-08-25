import Multiselect from "../../../Element/MultipleSelect"

interface TechnologyProps {
    value: string | undefined,
    handleChange: Function
}

const technology = [
    "Java",
    "C",
    "C++",
    "Python",
    "MATLAB",
    "Javascript",
    "Typescript",
    "Node.js",
    "React.js",
    "Next.js",
    "Angular.js",
    "AWS",
    "Kubernetes",
    "Docker",
    "Stencil",
    "Postgres",
    "Vue.js",
    "Go",
    "Scala",
    "k8s",
    "SQL",
    "dynamo",
    "MongoDB",
    'Rust',
    "Bash",
    "shellscript",
    "Spring",
    "VBA",
    "kafka",
    "cassandra",
    "Docker",
    "Ruby on Rails",
    "Tensorflow",
    "PyTorch",
    "Linux",
    "PHP",
    "Symfony",
    "Laravel",
    "Kibana",
    "Grafana",
    "Terraform",
    "Datadog",
    "Swift",
    "Flutter",
    "Unity",
    "Jupyter"
  ]
  

const Technology = (props: TechnologyProps) => {
    const handleChange = ( sentence: string ,tech: any) => {
        props.handleChange('technology_used', tech)
    }

    return (
        <div>
            <label className="block text-sm font-medium text-blue-grey-700">
                Technology used at work*
            </label>
            <div className="mt-1">
              <Multiselect technology={technology} handleChange={handleChange} value={props.value}/>
            </div>
        </div>
    )
}

export default Technology;