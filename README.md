# brewcoua/artifact-exists
A GitHub action to check if an artifact exists for a given repository.

## Usage

```yaml
- name: Check if artifact exists
  uses: brewcoua/artifact-exists@v1.1.0
  with:
    name: artifact-exists.tar.gz # Required
    repo: owner/repo # Default to current repository
    token: ${{ secrets.GITHUB_TOKEN }} # Default to ${{ github.token }}
```