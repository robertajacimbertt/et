#!/bin/bash

# Env Vars:
# REGISTRY: name of the image registry/namespace to store the images
# NOCACHE: set this to "--no-cache" to turn off the Docker build cache
#
# NOTE: to run this you MUST set the REGISTRY environment variable to
# your own image registry/namespace otherwise the `docker push` commands
# will fail due to an auth failure. Which means, you also need to be logged
# into that registry before you run it.

set -ex
export REGISTRY=${REGISTRY:-ibmcom}

# Build the image
docker build ${NOCACHE} -t ${REGISTRY}/hello .

# And push it
docker push ${REGISTRY}/hello
