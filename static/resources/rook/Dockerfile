FROM debian:bookworm-slim
ARG ROOK_VERSION=0.1.3
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash ca-certificates curl jq tar gzip git \
    && curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
       -o /tmp/install-rook.sh \
    && bash /tmp/install-rook.sh --version "$ROOK_VERSION" --dir /usr/local/bin \
    && useradd --create-home --uid 10001 rook
WORKDIR /workspace
# Build with the reviewed repository root as the context; never COPY personal home state.
COPY --chown=10001:10001 .testmuai/rook/ .testmuai/rook/
COPY --chown=10001:10001 ci/rook-ci.sh ci/rook-ci.sh
# Add only reviewed hook scripts and their runtime dependencies if your profile needs them.
USER 10001
ENV ROOK_ENV=prod ROOK_HOME=/tmp/rook-home
ENTRYPOINT ["bash", "ci/rook-ci.sh"]
