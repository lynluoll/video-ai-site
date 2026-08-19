# BytePlus production deployment

Production is deployed by BytePlus CodePipeline whenever `main` receives a
GitHub push.

The GitHub Actions workflow at
`.github/workflows/byteplus-codepipeline.yml` forwards only the push event to
the BytePlus webhook stored in the `BYTEPLUS_CODEPIPELINE_WEBHOOK_URL` GitHub
secret. The workflow does not build or deploy the site; those operations stay
inside BytePlus CodePipeline.

## Delivery path

1. CodePipeline checks out `https://github.com/lynluoll/video-ai-site.git` at
   `main`.
2. `Dockerfile.vefaas` runs `npm test`, which builds the static site and runs
   the rendered HTML tests.
3. The resulting image is pushed to the `creative-agents-cicd` Container
   Registry instance under `ads-ai-strategy/ads-ai-strategy`.
4. The built-in `faas-deploy` step performs a full release to VeFaaS function
   `mj0739ha` (`ads-ai-strategy-image`) in `ap-southeast-1`.

The checked-in pipeline definition is [`deploy/codepipeline.yaml`](codepipeline.yaml).
The production endpoint is <https://ads.byteplus-demo.com/>.

## GBS customer edition

Pushes to `gbs-edition` use a fully separate delivery path. The workflow at
`.github/workflows/byteplus-codepipeline-gbs.yml` forwards the event using the
`BYTEPLUS_GBS_CODEPIPELINE_WEBHOOK_URL` secret. BytePlus CodePipeline then builds
and pushes `ads-ai-strategy/ads-ai-strategy-gbs` before releasing VeFaaS function
`8j4ibhau` (`ads-ai-strategy-gbs`). Its checked-in definition is
[`deploy/codepipeline-gbs.yaml`](codepipeline-gbs.yaml).

## Rollback

Use the VeFaaS release history for function `ads-ai-strategy-image` and move 100% of
traffic back to the last known-good revision. Do not rebuild an old commit when
an existing healthy revision is available.
