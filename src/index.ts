import { getInput, exportVariable } from '@actions/core';
import { getOctokit } from '@actions/github';

async function main() {
    const artifact = getInput('name'),
        repository = getInput('repository'),
        token = getInput('token');

    const [owner, repo] = repository.split('/');

    const octokit: any = getOctokit(token);

    const response = await octokit.rest.actions.listArtifactsForRepo({
        owner,
        repo,
    });

    const artifactExists = response.data.artifacts.some((artifact: any) => artifact.name === artifact);
    exportVariable('ARTIFACT_EXISTS', artifactExists);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});