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
      githubToken: env('GITHUB_PAT', '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'), // accessing personal github token from env file
      owner: env('REPO_OWNER', 'maurodandrea'), // owner of the repo
      repo: env('REPO_NAME', 'terraform'), // name of the repo
      workflowId: env('WORKFLOW_ID', 'deploy_website.yaml'), // workflowId OR filename
      branch: env('TARGET_BRANCH', 'main'), // branch name
    },
  },
});