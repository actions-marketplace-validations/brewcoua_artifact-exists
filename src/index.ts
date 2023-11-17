import { getInput, exportVariable } from '@actions/core';
import { getOctokit } from '@actions/github';

// @ts-ignore
type ANY = any;

async function main() {
    const artifact = getInput('name'),
        repository = getInput('repository'),
        token = getInput('token');

    const [owner, repo] = repository.split('/');

    const octokit: ANY = getOctokit(token);

    const response = await octokit.rest.listArtifactsForRepo({
        owner,
        repo,
    });

    const artifactExists = response.data.artifacts.some((artifact) => artifact.name === artifact);
    exportVariable('ARTIFACT_EXISTS', artifactExists);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});