export default ({ env }: any) => ({
  upload: {
    config: {
      provider: env('UPLOAD_PLUGIN_PROVIDER', 'aws-s3'),
      providerOptions: {
        baseUrl: env('CDN_URL'),
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          endpoint: env('AWS_BUCKET_ENDPOINT'),
          params: {
            ACL: 'private',
            signedUrlExpires: 15 * 60,
            Bucket: env('AWS_BUCKET_NAME'),
          },
        }
      },
    },
  },
  navigation: {
    enabled: true,
    config: {
      contentTypes: ['api::page.page'],
      contentTypesNameFields: {
          'api::page.page': ['name']
      },
      pathDefaultFields: {
          'api::page.page': ['slug']
      },
      allowedLevels: 2,
      cascadeMenuAttached: false
    }
  },
  'update-static-content': {
    enabled: true,
    config: {
      githubToken: env('GITHUB_PAT'), // accessing personal github token from env file
      owner: env('REPO_OWNER'), // owner of the repo
      repo: env('REPO_NAME'), // name of the repo
      workflowId: env('WORKFLOW_ID'), // workflowId OR filename
      branch: env('TARGET_BRANCH'), // branch name
    },
  },
});
