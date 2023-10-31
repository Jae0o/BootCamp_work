import { request } from "./Api.js";
import BreadCrumb from "./BreadCrumb.js";
import ImgaeViewer from "./ImageViewer.js";
import Loading from "./Loading.js";
import Nodes from "./Nodes.js";

export default function App({ target }) {
  this.state = {
    isRoot: true,
    isLoading: false,
    nodes: [],
    paths: [],
  };

  this.setState = (newState) => {
    this.state = newState;
    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });

    imageViewer.setState({
      selectedIamgeUrl: this.state.selectedIamgeUrl,
    });

    loading.setState(this.state.isLoading);

    breadcrumb.setState(this.state.paths);
  };

  const loading = new Loading({ target });

  const breadcrumb = new BreadCrumb({
    target,
    state: this.state.paths,
    onClick: async (id) => {
      const nextPaths = id ? [...this.state.paths] : [];

      if (id) {
        const index = nextPaths.findIndex((path) => path.id === id);
        this.setState({
          ...this.state,
          paths: nextPaths.slice(0, index + 1),
        });
        await fetchNodes(id);
        return;
      }
      this.setState({
        ...this.state,
        paths: [],
      });
      await fetchNodes();
    },
  });

  const nodes = new Nodes({
    target,
    state: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      selectedIamgeUrl: null,
    },
    onClick: async (node) => {
      if (node.type === "DIRECTORY") {
        await fetchNodes(node.id);

        this.setState({
          ...this.state,
          paths: [...this.state.paths, node],
        });
      }

      if (node.type === "FILE") {
        this.setState({
          ...this.state,
          selectedIamgeUrl: `https://kdt-frontend.cat-api.programmers.co.kr/static${node.filePath}`,
        });
      }
    },
    onPrevClick: async () => {
      const nextPaths = [...this.state.paths];
      nextPaths.pop();

      this.setState({
        ...this.state,
        paths: nextPaths,
      });
      if (nextPaths.length === 0) {
        await fetchNodes();
      } else {
        await fetchNodes(nextPaths[nextPaths.length - 1].id);
      }
    },
  });

  const imageViewer = new ImgaeViewer({
    target,
    onClose: () => {
      this.setState({
        ...this.state,
        selectedIamgeUrl: null,
      });
    },
  });

  const fetchNodes = async (id) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const nodes = await request(id ? `/${id}` : `/`);

    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
      isLoading: false,
    });
  };

  fetchNodes();
}
